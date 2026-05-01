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
<tr><td><div id="tag10235" onclick="CopyToClipboard('tag10235');return false;" class="tag-decoration">nightly</div><div id="tag12970" onclick="CopyToClipboard('tag12970');return false;" class="tag-decoration">nightly-e09efd9</div><div id="tag6684" onclick="CopyToClipboard('tag6684');return false;" class="tag-decoration">nightly-d8e572f0915f2f62385e6d780cf9b91a569e7d42</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e09efd97c371f00f784a9f19542ed9bccdea7c44" target="_blank">Version update: 51ea306d9ff60c6e665e2aeedf73de57413d7e98 => d8e572f0915f2f62385e6d780cf9b91a569e7d42</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25232070166" target="_blank">2026-05-01 20:36:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29257" onclick="CopyToClipboard('tag29257');return false;" class="tag-decoration">release</div><div id="tag29171" onclick="CopyToClipboard('tag29171');return false;" class="tag-decoration">release-55c4a40</div><div id="tag6108" onclick="CopyToClipboard('tag6108');return false;" class="tag-decoration">release-5.0.0</div><div id="tag25495" onclick="CopyToClipboard('tag25495');return false;" class="tag-decoration">release-v5</div><div id="tag22068" onclick="CopyToClipboard('tag22068');return false;" class="tag-decoration">release-v5.0</div><div id="tag1277" onclick="CopyToClipboard('tag1277');return false;" class="tag-decoration">release-v5.0.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/55c4a40d8f28a5efca274291e1921efaee63d554" target="_blank">Version update: 4.5.5 => 5.0.0</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25209255533" target="_blank">2026-05-01 09:13:47</a></td></tr>
<tr><td><div id="tag25948" onclick="CopyToClipboard('tag25948');return false;" class="tag-decoration">testing</div><div id="tag17788" onclick="CopyToClipboard('tag17788');return false;" class="tag-decoration">testing-820aa86</div><div id="tag21210" onclick="CopyToClipboard('tag21210');return false;" class="tag-decoration">testing-5.0.1</div><div id="tag28581" onclick="CopyToClipboard('tag28581');return false;" class="tag-decoration">testing-v5</div><div id="tag2633" onclick="CopyToClipboard('tag2633');return false;" class="tag-decoration">testing-v5.0</div><div id="tag21980" onclick="CopyToClipboard('tag21980');return false;" class="tag-decoration">testing-v5.0.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/820aa86f551da121c7caec9fac9120e6efe60d4a" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234299007" target="_blank">2026-05-01 21:38:28</a></td></tr>
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
