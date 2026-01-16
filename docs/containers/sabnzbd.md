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
<tr><td><div id="tag9561" onclick="CopyToClipboard('tag9561');return false;" class="tag-decoration">nightly</div><div id="tag5615" onclick="CopyToClipboard('tag5615');return false;" class="tag-decoration">nightly-7b6de0e</div><div id="tag7745" onclick="CopyToClipboard('tag7745');return false;" class="tag-decoration">nightly-cf14e24036c8d5cf1085fd24e3d899d4eb84e7b8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7b6de0eb9f938624a4223d285f2399a4a30ca39c" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21059655105" target="_blank">2026-01-16 07:55:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13245" onclick="CopyToClipboard('tag13245');return false;" class="tag-decoration">release</div><div id="tag7836" onclick="CopyToClipboard('tag7836');return false;" class="tag-decoration">release-f41750a</div><div id="tag24687" onclick="CopyToClipboard('tag24687');return false;" class="tag-decoration">release-4.5.5</div><div id="tag26611" onclick="CopyToClipboard('tag26611');return false;" class="tag-decoration">release-v4</div><div id="tag9721" onclick="CopyToClipboard('tag9721');return false;" class="tag-decoration">release-v4.5</div><div id="tag1670" onclick="CopyToClipboard('tag1670');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f41750a58e84dcff8e9602511b1924f62fecfc2f" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21059655554" target="_blank">2026-01-16 07:55:40</a></td></tr>
<tr><td><div id="tag3021" onclick="CopyToClipboard('tag3021');return false;" class="tag-decoration">testing</div><div id="tag14357" onclick="CopyToClipboard('tag14357');return false;" class="tag-decoration">testing-3e17261</div><div id="tag7059" onclick="CopyToClipboard('tag7059');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3e17261d2ec3522ee2f39b36d8734568c7c6f199" target="_blank">Version update: 4.6.0Beta2 => 4.6.0Beta2</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20950122329" target="_blank">2026-01-13 08:37:52</a></td></tr>
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
