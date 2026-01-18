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
<tr><td><div id="tag3132" onclick="CopyToClipboard('tag3132');return false;" class="tag-decoration">nightly</div><div id="tag28766" onclick="CopyToClipboard('tag28766');return false;" class="tag-decoration">nightly-dd05982</div><div id="tag10760" onclick="CopyToClipboard('tag10760');return false;" class="tag-decoration">nightly-bf412371358ed3773c5f0fff65400c9d1547bdc9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/dd05982478a5068eebab14fccd4640c86e7fac3c" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21113699708" target="_blank">2026-01-18 14:57:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27492" onclick="CopyToClipboard('tag27492');return false;" class="tag-decoration">release</div><div id="tag24153" onclick="CopyToClipboard('tag24153');return false;" class="tag-decoration">release-4d06520</div><div id="tag3913" onclick="CopyToClipboard('tag3913');return false;" class="tag-decoration">release-4.5.5</div><div id="tag19784" onclick="CopyToClipboard('tag19784');return false;" class="tag-decoration">release-v4</div><div id="tag5745" onclick="CopyToClipboard('tag5745');return false;" class="tag-decoration">release-v4.5</div><div id="tag3743" onclick="CopyToClipboard('tag3743');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4d06520e78be33c1ebbdfc7c6f619886e59df325" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21090398064" target="_blank">2026-01-17 07:01:45</a></td></tr>
<tr><td><div id="tag17817" onclick="CopyToClipboard('tag17817');return false;" class="tag-decoration">testing</div><div id="tag11726" onclick="CopyToClipboard('tag11726');return false;" class="tag-decoration">testing-2af2225</div><div id="tag12486" onclick="CopyToClipboard('tag12486');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2af22256351a3bec28330abda45f4e50027a1baa" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21090398251" target="_blank">2026-01-17 07:01:46</a></td></tr>
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
