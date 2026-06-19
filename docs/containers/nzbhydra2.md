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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28447" onclick="CopyToClipboard('tag28447');return false;" class="tag-decoration">release</div><div id="tag29622" onclick="CopyToClipboard('tag29622');return false;" class="tag-decoration">release-8dacc55</div><div id="tag3353" onclick="CopyToClipboard('tag3353');return false;" class="tag-decoration">release-8.8.4</div><div id="tag21339" onclick="CopyToClipboard('tag21339');return false;" class="tag-decoration">release-v8</div><div id="tag5155" onclick="CopyToClipboard('tag5155');return false;" class="tag-decoration">release-v8.8</div><div id="tag16922" onclick="CopyToClipboard('tag16922');return false;" class="tag-decoration">release-v8.8.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8dacc55d01ed93b58972f2a5d12240ca6597b419" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27840948083" target="_blank">2026-06-19 17:55:17</a></td></tr>
<tr><td><div id="tag24722" onclick="CopyToClipboard('tag24722');return false;" class="tag-decoration">testing</div><div id="tag20961" onclick="CopyToClipboard('tag20961');return false;" class="tag-decoration">testing-76dc006</div><div id="tag8880" onclick="CopyToClipboard('tag8880');return false;" class="tag-decoration">testing-8.8.3</div><div id="tag28292" onclick="CopyToClipboard('tag28292');return false;" class="tag-decoration">testing-v8</div><div id="tag20044" onclick="CopyToClipboard('tag20044');return false;" class="tag-decoration">testing-v8.8</div><div id="tag16308" onclick="CopyToClipboard('tag16308');return false;" class="tag-decoration">testing-v8.8.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/76dc0064edf89763613b8d8060638542420dcd05" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27642922924" target="_blank">2026-06-16 19:33:33</a></td></tr>
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
