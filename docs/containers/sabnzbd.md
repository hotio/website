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
<tr><td><div id="tag20876" onclick="CopyToClipboard('tag20876');return false;" class="tag-decoration">nightly</div><div id="tag18980" onclick="CopyToClipboard('tag18980');return false;" class="tag-decoration">nightly-a31df5a</div><div id="tag17763" onclick="CopyToClipboard('tag17763');return false;" class="tag-decoration">nightly-29699890d5d55b83680d679e18aa734d90663b07</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/a31df5aeceff5dee337f1119ea2697b0103b8232" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34383702342" target="_blank">2026-09-09 17:34:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30706" onclick="CopyToClipboard('tag30706');return false;" class="tag-decoration">release</div><div id="tag31614" onclick="CopyToClipboard('tag31614');return false;" class="tag-decoration">release-dbdc315</div><div id="tag25523" onclick="CopyToClipboard('tag25523');return false;" class="tag-decoration">release-5.1.3</div><div id="tag24349" onclick="CopyToClipboard('tag24349');return false;" class="tag-decoration">release-v5</div><div id="tag17898" onclick="CopyToClipboard('tag17898');return false;" class="tag-decoration">release-v5.1</div><div id="tag10207" onclick="CopyToClipboard('tag10207');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/dbdc315781a3bc7b7ab9957073a826ddd38e5043" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34216404540" target="_blank">2026-09-08 10:37:05</a></td></tr>
<tr><td><div id="tag3610" onclick="CopyToClipboard('tag3610');return false;" class="tag-decoration">testing</div><div id="tag29226" onclick="CopyToClipboard('tag29226');return false;" class="tag-decoration">testing-f0483b9</div><div id="tag405" onclick="CopyToClipboard('tag405');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag29291" onclick="CopyToClipboard('tag29291');return false;" class="tag-decoration">testing-v5</div><div id="tag1322" onclick="CopyToClipboard('tag1322');return false;" class="tag-decoration">testing-v5.1</div><div id="tag5054" onclick="CopyToClipboard('tag5054');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f0483b9835d1dac3bb08615b200dc5a5b9661992" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34216442154" target="_blank">2026-09-08 10:37:30</a></td></tr>
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
