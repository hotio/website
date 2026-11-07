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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23256" onclick="CopyToClipboard('tag23256');return false;" class="tag-decoration">v2</div><div id="tag5640" onclick="CopyToClipboard('tag5640');return false;" class="tag-decoration">v2-260b883</div><div id="tag8960" onclick="CopyToClipboard('tag8960');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag18262" onclick="CopyToClipboard('tag18262');return false;" class="tag-decoration">v2-v2</div><div id="tag14412" onclick="CopyToClipboard('tag14412');return false;" class="tag-decoration">v2-v2.2</div><div id="tag1565" onclick="CopyToClipboard('tag1565');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/260b88301eed06f9258069a9716f9beacfe617eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323851695" target="_blank">2026-11-07 01:23:51</a></td></tr>
<tr><td><div id="tag13458" onclick="CopyToClipboard('tag13458');return false;" class="tag-decoration">v2-develop</div><div id="tag32560" onclick="CopyToClipboard('tag32560');return false;" class="tag-decoration">v2-develop-8be1f91</div><div id="tag21017" onclick="CopyToClipboard('tag21017');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag28474" onclick="CopyToClipboard('tag28474');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag817" onclick="CopyToClipboard('tag817');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19821" onclick="CopyToClipboard('tag19821');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8be1f9117febfdfa9584444f4ba621ee2da66b36" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323849908" target="_blank">2026-11-07 01:23:49</a></td></tr>
<tr><td><div id="tag32199" onclick="CopyToClipboard('tag32199');return false;" class="tag-decoration">v3</div><div id="tag4638" onclick="CopyToClipboard('tag4638');return false;" class="tag-decoration">v3-cf20a4b</div><div id="tag15120" onclick="CopyToClipboard('tag15120');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag12495" onclick="CopyToClipboard('tag12495');return false;" class="tag-decoration">v3-v3</div><div id="tag3785" onclick="CopyToClipboard('tag3785');return false;" class="tag-decoration">v3-v3.6</div><div id="tag4143" onclick="CopyToClipboard('tag4143');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cf20a4b3afe94381b27222a187519ff0756339b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323855295" target="_blank">2026-11-07 01:23:53</a></td></tr>
<tr><td><div id="tag1423" onclick="CopyToClipboard('tag1423');return false;" class="tag-decoration">v3-develop</div><div id="tag7725" onclick="CopyToClipboard('tag7725');return false;" class="tag-decoration">v3-develop-3a54af3</div><div id="tag4166" onclick="CopyToClipboard('tag4166');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag8656" onclick="CopyToClipboard('tag8656');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24933" onclick="CopyToClipboard('tag24933');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag30436" onclick="CopyToClipboard('tag30436');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3a54af333fb13e81fee19b728c602ebf810acd6a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323853526" target="_blank">2026-11-07 01:23:52</a></td></tr>
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
