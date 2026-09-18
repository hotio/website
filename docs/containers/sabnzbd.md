---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag4515" onclick="CopyToClipboard('tag4515');return false;" class="tag-decoration">nightly</div><div id="tag17244" onclick="CopyToClipboard('tag17244');return false;" class="tag-decoration">nightly-2c6e511</div><div id="tag18599" onclick="CopyToClipboard('tag18599');return false;" class="tag-decoration">nightly-727f5aeb194b45b663f1d99a2233e9857a2a8913</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2c6e5116e255e1b473b1593b42836cc7fb6de82b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35283219938" target="_blank">2026-09-17 22:40:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6913" onclick="CopyToClipboard('tag6913');return false;" class="tag-decoration">release</div><div id="tag10776" onclick="CopyToClipboard('tag10776');return false;" class="tag-decoration">release-4ddb3c4</div><div id="tag21397" onclick="CopyToClipboard('tag21397');return false;" class="tag-decoration">release-5.1.3</div><div id="tag21799" onclick="CopyToClipboard('tag21799');return false;" class="tag-decoration">release-v5</div><div id="tag22637" onclick="CopyToClipboard('tag22637');return false;" class="tag-decoration">release-v5.1</div><div id="tag9040" onclick="CopyToClipboard('tag9040');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4ddb3c4fda361856ab55e9395cac018dca1110a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265594397" target="_blank">2026-09-17 19:33:28</a></td></tr>
<tr><td><div id="tag14900" onclick="CopyToClipboard('tag14900');return false;" class="tag-decoration">testing</div><div id="tag764" onclick="CopyToClipboard('tag764');return false;" class="tag-decoration">testing-e5e9d54</div><div id="tag20300" onclick="CopyToClipboard('tag20300');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag17030" onclick="CopyToClipboard('tag17030');return false;" class="tag-decoration">testing-v5</div><div id="tag23161" onclick="CopyToClipboard('tag23161');return false;" class="tag-decoration">testing-v5.1</div><div id="tag18964" onclick="CopyToClipboard('tag18964');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e5e9d545af60820a13eb50948a7751082aeadef9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35317685416" target="_blank">2026-09-18 07:04:03</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
