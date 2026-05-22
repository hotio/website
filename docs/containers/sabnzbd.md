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
<tr><td><div id="tag27664" onclick="CopyToClipboard('tag27664');return false;" class="tag-decoration">nightly</div><div id="tag19683" onclick="CopyToClipboard('tag19683');return false;" class="tag-decoration">nightly-cf2c63a</div><div id="tag191" onclick="CopyToClipboard('tag191');return false;" class="tag-decoration">nightly-2f4750f77d053665b50556f82852d5cb791a1737</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/cf2c63a2a6ce0ae3326661bf111f126121078f87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26311016474" target="_blank">2026-05-22 20:43:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14761" onclick="CopyToClipboard('tag14761');return false;" class="tag-decoration">release</div><div id="tag17005" onclick="CopyToClipboard('tag17005');return false;" class="tag-decoration">release-f14120f</div><div id="tag26047" onclick="CopyToClipboard('tag26047');return false;" class="tag-decoration">release-5.0.3</div><div id="tag15263" onclick="CopyToClipboard('tag15263');return false;" class="tag-decoration">release-v5</div><div id="tag25126" onclick="CopyToClipboard('tag25126');return false;" class="tag-decoration">release-v5.0</div><div id="tag5287" onclick="CopyToClipboard('tag5287');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f14120f5b2a70ca59916b20ab54478aa4d1aecee" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082287675" target="_blank">2026-05-19 07:15:28</a></td></tr>
<tr><td><div id="tag29383" onclick="CopyToClipboard('tag29383');return false;" class="tag-decoration">testing</div><div id="tag14112" onclick="CopyToClipboard('tag14112');return false;" class="tag-decoration">testing-5cda10d</div><div id="tag18330" onclick="CopyToClipboard('tag18330');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag20272" onclick="CopyToClipboard('tag20272');return false;" class="tag-decoration">testing-v5</div><div id="tag5356" onclick="CopyToClipboard('tag5356');return false;" class="tag-decoration">testing-v5.0</div><div id="tag2043" onclick="CopyToClipboard('tag2043');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5cda10d55ee8d2282773042ccf76b4e9f06b1a65" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082311366" target="_blank">2026-05-19 07:16:02</a></td></tr>
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
