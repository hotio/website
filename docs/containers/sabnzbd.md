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
<tr><td><div id="tag8486" onclick="CopyToClipboard('tag8486');return false;" class="tag-decoration">nightly</div><div id="tag20951" onclick="CopyToClipboard('tag20951');return false;" class="tag-decoration">nightly-e09efd9</div><div id="tag28241" onclick="CopyToClipboard('tag28241');return false;" class="tag-decoration">nightly-d8e572f0915f2f62385e6d780cf9b91a569e7d42</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e09efd97c371f00f784a9f19542ed9bccdea7c44" target="_blank">Version update: 51ea306d9ff60c6e665e2aeedf73de57413d7e98 => d8e572f0915f2f62385e6d780cf9b91a569e7d42</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25232070166" target="_blank">2026-05-01 20:36:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8593" onclick="CopyToClipboard('tag8593');return false;" class="tag-decoration">release</div><div id="tag26171" onclick="CopyToClipboard('tag26171');return false;" class="tag-decoration">release-83955ca</div><div id="tag21000" onclick="CopyToClipboard('tag21000');return false;" class="tag-decoration">release-5.0.1</div><div id="tag854" onclick="CopyToClipboard('tag854');return false;" class="tag-decoration">release-v5</div><div id="tag17947" onclick="CopyToClipboard('tag17947');return false;" class="tag-decoration">release-v5.0</div><div id="tag23335" onclick="CopyToClipboard('tag23335');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/83955ca245d4949e4c58d3e96c9199ee430f62b8" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234298284" target="_blank">2026-05-01 21:38:26</a></td></tr>
<tr><td><div id="tag23930" onclick="CopyToClipboard('tag23930');return false;" class="tag-decoration">testing</div><div id="tag7556" onclick="CopyToClipboard('tag7556');return false;" class="tag-decoration">testing-820aa86</div><div id="tag13871" onclick="CopyToClipboard('tag13871');return false;" class="tag-decoration">testing-5.0.1</div><div id="tag27532" onclick="CopyToClipboard('tag27532');return false;" class="tag-decoration">testing-v5</div><div id="tag4401" onclick="CopyToClipboard('tag4401');return false;" class="tag-decoration">testing-v5.0</div><div id="tag24856" onclick="CopyToClipboard('tag24856');return false;" class="tag-decoration">testing-v5.0.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/820aa86f551da121c7caec9fac9120e6efe60d4a" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234299007" target="_blank">2026-05-01 21:38:28</a></td></tr>
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
