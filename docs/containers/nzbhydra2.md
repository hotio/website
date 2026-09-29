---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23077" onclick="CopyToClipboard('tag23077');return false;" class="tag-decoration">release</div><div id="tag27687" onclick="CopyToClipboard('tag27687');return false;" class="tag-decoration">release-7e51af4</div><div id="tag2596" onclick="CopyToClipboard('tag2596');return false;" class="tag-decoration">release-9.1.0</div><div id="tag26158" onclick="CopyToClipboard('tag26158');return false;" class="tag-decoration">release-v9</div><div id="tag11114" onclick="CopyToClipboard('tag11114');return false;" class="tag-decoration">release-v9.1</div><div id="tag7385" onclick="CopyToClipboard('tag7385');return false;" class="tag-decoration">release-v9.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7e51af4e6cfafe58ccfaabd6b020b56e7d9e14bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36559630034" target="_blank">2026-09-29 11:05:50</a></td></tr>
<tr><td><div id="tag30109" onclick="CopyToClipboard('tag30109');return false;" class="tag-decoration">testing</div><div id="tag10342" onclick="CopyToClipboard('tag10342');return false;" class="tag-decoration">testing-8319994</div><div id="tag8213" onclick="CopyToClipboard('tag8213');return false;" class="tag-decoration">testing-9.0.6</div><div id="tag27284" onclick="CopyToClipboard('tag27284');return false;" class="tag-decoration">testing-v9</div><div id="tag8811" onclick="CopyToClipboard('tag8811');return false;" class="tag-decoration">testing-v9.0</div><div id="tag28246" onclick="CopyToClipboard('tag28246');return false;" class="tag-decoration">testing-v9.0.6</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/831999478e7eb4629cc46afddffa8fa1e9c89869" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36499370514" target="_blank">2026-09-28 23:42:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
