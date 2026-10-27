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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26392" onclick="CopyToClipboard('tag26392');return false;" class="tag-decoration">release</div><div id="tag20041" onclick="CopyToClipboard('tag20041');return false;" class="tag-decoration">release-5b221fc</div><div id="tag23400" onclick="CopyToClipboard('tag23400');return false;" class="tag-decoration">release-9.1.1</div><div id="tag11196" onclick="CopyToClipboard('tag11196');return false;" class="tag-decoration">release-v9</div><div id="tag1835" onclick="CopyToClipboard('tag1835');return false;" class="tag-decoration">release-v9.1</div><div id="tag26742" onclick="CopyToClipboard('tag26742');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/5b221fc3e362a1da7349275745febed599e67814" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/40466256466" target="_blank">2026-10-27 07:17:38</a></td></tr>
<tr><td><div id="tag22186" onclick="CopyToClipboard('tag22186');return false;" class="tag-decoration">testing</div><div id="tag25338" onclick="CopyToClipboard('tag25338');return false;" class="tag-decoration">testing-ef7e336</div><div id="tag2433" onclick="CopyToClipboard('tag2433');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag26730" onclick="CopyToClipboard('tag26730');return false;" class="tag-decoration">testing-v9</div><div id="tag24687" onclick="CopyToClipboard('tag24687');return false;" class="tag-decoration">testing-v9.1</div><div id="tag8097" onclick="CopyToClipboard('tag8097');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ef7e3363f176df7732306d10516f239a936961b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/40466263972" target="_blank">2026-10-27 07:17:42</a></td></tr>
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
