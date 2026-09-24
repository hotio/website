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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4516" onclick="CopyToClipboard('tag4516');return false;" class="tag-decoration">release</div><div id="tag20287" onclick="CopyToClipboard('tag20287');return false;" class="tag-decoration">release-b4a8265</div><div id="tag86" onclick="CopyToClipboard('tag86');return false;" class="tag-decoration">release-9.0.5</div><div id="tag14386" onclick="CopyToClipboard('tag14386');return false;" class="tag-decoration">release-v9</div><div id="tag17710" onclick="CopyToClipboard('tag17710');return false;" class="tag-decoration">release-v9.0</div><div id="tag22169" onclick="CopyToClipboard('tag22169');return false;" class="tag-decoration">release-v9.0.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b4a8265803487286e776a5b05b17e4455564bd3f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36064674392" target="_blank">2026-09-24 21:57:44</a></td></tr>
<tr><td><div id="tag9523" onclick="CopyToClipboard('tag9523');return false;" class="tag-decoration">testing</div><div id="tag17854" onclick="CopyToClipboard('tag17854');return false;" class="tag-decoration">testing-82e34e4</div><div id="tag19294" onclick="CopyToClipboard('tag19294');return false;" class="tag-decoration">testing-9.0.5</div><div id="tag13491" onclick="CopyToClipboard('tag13491');return false;" class="tag-decoration">testing-v9</div><div id="tag19583" onclick="CopyToClipboard('tag19583');return false;" class="tag-decoration">testing-v9.0</div><div id="tag4261" onclick="CopyToClipboard('tag4261');return false;" class="tag-decoration">testing-v9.0.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/82e34e48e4c46cd6d40ac943a6b6a4baab943f00" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36039456156" target="_blank">2026-09-24 18:10:59</a></td></tr>
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
