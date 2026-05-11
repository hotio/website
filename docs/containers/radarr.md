---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30036" onclick="CopyToClipboard('tag30036');return false;" class="tag-decoration">nightly</div><div id="tag3494" onclick="CopyToClipboard('tag3494');return false;" class="tag-decoration">nightly-9839f28</div><div id="tag22294" onclick="CopyToClipboard('tag22294');return false;" class="tag-decoration">nightly-6.2.0.10409</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/9839f282939e4476692ca140cce1f53a96e13a1f" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25700547378" target="_blank">2026-05-11 22:16:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18394" onclick="CopyToClipboard('tag18394');return false;" class="tag-decoration">release</div><div id="tag5083" onclick="CopyToClipboard('tag5083');return false;" class="tag-decoration">release-47c2e38</div><div id="tag27686" onclick="CopyToClipboard('tag27686');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/47c2e38926e0d709af88612717f424e53dd4c4c2" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25664502699" target="_blank">2026-05-11 10:24:28</a></td></tr>
<tr><td><div id="tag25888" onclick="CopyToClipboard('tag25888');return false;" class="tag-decoration">testing</div><div id="tag11477" onclick="CopyToClipboard('tag11477');return false;" class="tag-decoration">testing-874160a</div><div id="tag6668" onclick="CopyToClipboard('tag6668');return false;" class="tag-decoration">testing-6.2.0.10390</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/874160a79fbcd67fac18de4d95c533803c0506bc" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25700554101" target="_blank">2026-05-11 22:16:39</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
