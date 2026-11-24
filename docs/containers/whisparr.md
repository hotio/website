---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19704" onclick="CopyToClipboard('tag19704');return false;" class="tag-decoration">v2</div><div id="tag24105" onclick="CopyToClipboard('tag24105');return false;" class="tag-decoration">v2-aaf8bbc</div><div id="tag20520" onclick="CopyToClipboard('tag20520');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag27768" onclick="CopyToClipboard('tag27768');return false;" class="tag-decoration">v2-v2</div><div id="tag16107" onclick="CopyToClipboard('tag16107');return false;" class="tag-decoration">v2-v2.3</div><div id="tag21313" onclick="CopyToClipboard('tag21313');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aaf8bbceade9331df843115ab0daa82285342dec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/44396404983" target="_blank">2026-11-18 20:57:17</a></td></tr>
<tr><td><div id="tag23207" onclick="CopyToClipboard('tag23207');return false;" class="tag-decoration">v2-develop</div><div id="tag11884" onclick="CopyToClipboard('tag11884');return false;" class="tag-decoration">v2-develop-5dac1ec</div><div id="tag1499" onclick="CopyToClipboard('tag1499');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag29512" onclick="CopyToClipboard('tag29512');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12453" onclick="CopyToClipboard('tag12453');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag2738" onclick="CopyToClipboard('tag2738');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5dac1ec0f50f4474c54aa252a0c9d7eb500aa187" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45304117260" target="_blank">2026-11-24 01:18:54</a></td></tr>
<tr><td><div id="tag13558" onclick="CopyToClipboard('tag13558');return false;" class="tag-decoration">v3</div><div id="tag21942" onclick="CopyToClipboard('tag21942');return false;" class="tag-decoration">v3-cf20a4b</div><div id="tag21717" onclick="CopyToClipboard('tag21717');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag7508" onclick="CopyToClipboard('tag7508');return false;" class="tag-decoration">v3-v3</div><div id="tag13142" onclick="CopyToClipboard('tag13142');return false;" class="tag-decoration">v3-v3.6</div><div id="tag23300" onclick="CopyToClipboard('tag23300');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cf20a4b3afe94381b27222a187519ff0756339b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323855295" target="_blank">2026-11-07 01:23:53</a></td></tr>
<tr><td><div id="tag16159" onclick="CopyToClipboard('tag16159');return false;" class="tag-decoration">v3-develop</div><div id="tag12413" onclick="CopyToClipboard('tag12413');return false;" class="tag-decoration">v3-develop-d1664aa</div><div id="tag29360" onclick="CopyToClipboard('tag29360');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag7125" onclick="CopyToClipboard('tag7125');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6339" onclick="CopyToClipboard('tag6339');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag22375" onclick="CopyToClipboard('tag22375');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d1664aaf00ac08365d53a288d66deb44bd9258f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45304125114" target="_blank">2026-11-24 01:18:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
