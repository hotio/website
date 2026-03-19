---
hide:
  - toc
title: hotio/sonarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sonarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sonarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sonarr/sonarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag10948" onclick="CopyToClipboard('tag10948');return false;" class="tag-decoration">nightly</div><div id="tag7272" onclick="CopyToClipboard('tag7272');return false;" class="tag-decoration">nightly-fb1dada</div><div id="tag2149" onclick="CopyToClipboard('tag2149');return false;" class="tag-decoration">nightly-4.0.17.2950</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/fb1dadab3a8fe886461e1384cc672d2cccdc8e1b" target="_blank">Version update: 4.0.16.2946 => 4.0.17.2950</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/23167428498" target="_blank">2026-03-16 21:45:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10856" onclick="CopyToClipboard('tag10856');return false;" class="tag-decoration">release</div><div id="tag5696" onclick="CopyToClipboard('tag5696');return false;" class="tag-decoration">release-76eaaa7</div><div id="tag20498" onclick="CopyToClipboard('tag20498');return false;" class="tag-decoration">release-4.0.17.2952</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/76eaaa7a76f5949dd5d3be2d8712fff15b9fe199" target="_blank">Version update: 4.0.16.2944 => 4.0.17.2952</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/23302619028" target="_blank">2026-03-19 15:27:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sonarr" \
        -p 8989:8989 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8989/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sonarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sonarr:
        container_name: sonarr
        image: ghcr.io/hotio/sonarr
        ports:
          - "8989:8989"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8989/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
