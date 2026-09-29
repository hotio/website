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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag818" onclick="CopyToClipboard('tag818');return false;" class="tag-decoration">release</div><div id="tag28752" onclick="CopyToClipboard('tag28752');return false;" class="tag-decoration">release-7e51af4</div><div id="tag20186" onclick="CopyToClipboard('tag20186');return false;" class="tag-decoration">release-9.1.0</div><div id="tag27842" onclick="CopyToClipboard('tag27842');return false;" class="tag-decoration">release-v9</div><div id="tag22475" onclick="CopyToClipboard('tag22475');return false;" class="tag-decoration">release-v9.1</div><div id="tag20758" onclick="CopyToClipboard('tag20758');return false;" class="tag-decoration">release-v9.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7e51af4e6cfafe58ccfaabd6b020b56e7d9e14bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36559630034" target="_blank">2026-09-29 11:05:50</a></td></tr>
<tr><td><div id="tag16702" onclick="CopyToClipboard('tag16702');return false;" class="tag-decoration">testing</div><div id="tag12636" onclick="CopyToClipboard('tag12636');return false;" class="tag-decoration">testing-66e5a10</div><div id="tag31088" onclick="CopyToClipboard('tag31088');return false;" class="tag-decoration">testing-9.1.0</div><div id="tag14997" onclick="CopyToClipboard('tag14997');return false;" class="tag-decoration">testing-v9</div><div id="tag28895" onclick="CopyToClipboard('tag28895');return false;" class="tag-decoration">testing-v9.1</div><div id="tag31064" onclick="CopyToClipboard('tag31064');return false;" class="tag-decoration">testing-v9.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/66e5a10e6134ef239ba46ee21df27661524032f0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36559627651" target="_blank">2026-09-29 11:05:48</a></td></tr>
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
