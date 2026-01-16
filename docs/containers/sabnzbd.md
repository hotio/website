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
<tr><td><div id="tag10331" onclick="CopyToClipboard('tag10331');return false;" class="tag-decoration">nightly</div><div id="tag6521" onclick="CopyToClipboard('tag6521');return false;" class="tag-decoration">nightly-7b6de0e</div><div id="tag16470" onclick="CopyToClipboard('tag16470');return false;" class="tag-decoration">nightly-cf14e24036c8d5cf1085fd24e3d899d4eb84e7b8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7b6de0eb9f938624a4223d285f2399a4a30ca39c" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21059655105" target="_blank">2026-01-16 07:55:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4409" onclick="CopyToClipboard('tag4409');return false;" class="tag-decoration">release</div><div id="tag14758" onclick="CopyToClipboard('tag14758');return false;" class="tag-decoration">release-f41750a</div><div id="tag10582" onclick="CopyToClipboard('tag10582');return false;" class="tag-decoration">release-4.5.5</div><div id="tag6337" onclick="CopyToClipboard('tag6337');return false;" class="tag-decoration">release-v4</div><div id="tag16394" onclick="CopyToClipboard('tag16394');return false;" class="tag-decoration">release-v4.5</div><div id="tag3596" onclick="CopyToClipboard('tag3596');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f41750a58e84dcff8e9602511b1924f62fecfc2f" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21059655554" target="_blank">2026-01-16 07:55:40</a></td></tr>
<tr><td><div id="tag20216" onclick="CopyToClipboard('tag20216');return false;" class="tag-decoration">testing</div><div id="tag32512" onclick="CopyToClipboard('tag32512');return false;" class="tag-decoration">testing-ae2a63a</div><div id="tag1739" onclick="CopyToClipboard('tag1739');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ae2a63a66993dd626f865582e33d8d19876a27c2" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21059655979" target="_blank">2026-01-16 07:55:41</a></td></tr>
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
