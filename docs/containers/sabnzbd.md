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
<tr><td><div id="tag19692" onclick="CopyToClipboard('tag19692');return false;" class="tag-decoration">nightly</div><div id="tag5075" onclick="CopyToClipboard('tag5075');return false;" class="tag-decoration">nightly-d4b7b25</div><div id="tag4772" onclick="CopyToClipboard('tag4772');return false;" class="tag-decoration">nightly-d215d4b0d7bb35b6fce90a0a96966a37a6f6a1fc</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/d4b7b253f713760243e237661754646ef8e96b9b" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21246772548" target="_blank">2026-01-22 11:29:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15423" onclick="CopyToClipboard('tag15423');return false;" class="tag-decoration">release</div><div id="tag22340" onclick="CopyToClipboard('tag22340');return false;" class="tag-decoration">release-88e7b4a</div><div id="tag25400" onclick="CopyToClipboard('tag25400');return false;" class="tag-decoration">release-4.5.5</div><div id="tag5021" onclick="CopyToClipboard('tag5021');return false;" class="tag-decoration">release-v4</div><div id="tag268" onclick="CopyToClipboard('tag268');return false;" class="tag-decoration">release-v4.5</div><div id="tag28951" onclick="CopyToClipboard('tag28951');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/88e7b4a5d1f73b1a4ffbf45ed2542ef80d2246bd" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21244721804" target="_blank">2026-01-22 10:19:54</a></td></tr>
<tr><td><div id="tag28917" onclick="CopyToClipboard('tag28917');return false;" class="tag-decoration">testing</div><div id="tag9428" onclick="CopyToClipboard('tag9428');return false;" class="tag-decoration">testing-d1eaff8</div><div id="tag9297" onclick="CopyToClipboard('tag9297');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d1eaff82d998d9f9cdeb438010a3578b2324a01e" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21244722788" target="_blank">2026-01-22 10:19:56</a></td></tr>
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
