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
<tr><td><div id="tag19209" onclick="CopyToClipboard('tag19209');return false;" class="tag-decoration">nightly</div><div id="tag14684" onclick="CopyToClipboard('tag14684');return false;" class="tag-decoration">nightly-0611a21</div><div id="tag17172" onclick="CopyToClipboard('tag17172');return false;" class="tag-decoration">nightly-bf412371358ed3773c5f0fff65400c9d1547bdc9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0611a218a88a70d67881ab1cddf24305dc94ede2" target="_blank">Version update: 3d4fabfbdfc991385a943aaefa754e7d2b259a7b => bf412371358ed3773c5f0fff65400c9d1547bdc9</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21091761240" target="_blank">2026-01-17 08:57:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17772" onclick="CopyToClipboard('tag17772');return false;" class="tag-decoration">release</div><div id="tag28965" onclick="CopyToClipboard('tag28965');return false;" class="tag-decoration">release-4d06520</div><div id="tag4730" onclick="CopyToClipboard('tag4730');return false;" class="tag-decoration">release-4.5.5</div><div id="tag297" onclick="CopyToClipboard('tag297');return false;" class="tag-decoration">release-v4</div><div id="tag3667" onclick="CopyToClipboard('tag3667');return false;" class="tag-decoration">release-v4.5</div><div id="tag31575" onclick="CopyToClipboard('tag31575');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4d06520e78be33c1ebbdfc7c6f619886e59df325" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21090398064" target="_blank">2026-01-17 07:01:45</a></td></tr>
<tr><td><div id="tag14435" onclick="CopyToClipboard('tag14435');return false;" class="tag-decoration">testing</div><div id="tag986" onclick="CopyToClipboard('tag986');return false;" class="tag-decoration">testing-2af2225</div><div id="tag791" onclick="CopyToClipboard('tag791');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2af22256351a3bec28330abda45f4e50027a1baa" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21090398251" target="_blank">2026-01-17 07:01:46</a></td></tr>
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
