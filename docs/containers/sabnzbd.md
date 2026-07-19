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
<tr><td><div id="tag22792" onclick="CopyToClipboard('tag22792');return false;" class="tag-decoration">nightly</div><div id="tag31020" onclick="CopyToClipboard('tag31020');return false;" class="tag-decoration">nightly-e13df5e</div><div id="tag5647" onclick="CopyToClipboard('tag5647');return false;" class="tag-decoration">nightly-6731da2d68aee212fc717b72abefc6832271dfda</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e13df5e1d1d2a2ed4188641871c149fc399a2bb0" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29681383931" target="_blank">2026-07-19 09:19:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26870" onclick="CopyToClipboard('tag26870');return false;" class="tag-decoration">release</div><div id="tag843" onclick="CopyToClipboard('tag843');return false;" class="tag-decoration">release-978af83</div><div id="tag17577" onclick="CopyToClipboard('tag17577');return false;" class="tag-decoration">release-5.0.4</div><div id="tag1421" onclick="CopyToClipboard('tag1421');return false;" class="tag-decoration">release-v5</div><div id="tag16563" onclick="CopyToClipboard('tag16563');return false;" class="tag-decoration">release-v5.0</div><div id="tag24154" onclick="CopyToClipboard('tag24154');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/978af833492b92a953e44626fc2254899644e902" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29681376820" target="_blank">2026-07-19 09:19:40</a></td></tr>
<tr><td><div id="tag9874" onclick="CopyToClipboard('tag9874');return false;" class="tag-decoration">testing</div><div id="tag15747" onclick="CopyToClipboard('tag15747');return false;" class="tag-decoration">testing-e30e9cd</div><div id="tag1321" onclick="CopyToClipboard('tag1321');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e30e9cda9fd8faac03fa5d97373678faf97e191c" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29681380250" target="_blank">2026-07-19 09:19:48</a></td></tr>
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
