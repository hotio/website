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
<tr><td><div id="tag11767" onclick="CopyToClipboard('tag11767');return false;" class="tag-decoration">nightly</div><div id="tag15848" onclick="CopyToClipboard('tag15848');return false;" class="tag-decoration">nightly-728b13b</div><div id="tag16974" onclick="CopyToClipboard('tag16974');return false;" class="tag-decoration">nightly-fa3f8735ea6d87c54973644c07006c75b5a84c95</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/728b13b9d4674a48e0f8e3a2959c15a6c075445d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30148928479" target="_blank">2026-07-25 07:13:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21992" onclick="CopyToClipboard('tag21992');return false;" class="tag-decoration">release</div><div id="tag18382" onclick="CopyToClipboard('tag18382');return false;" class="tag-decoration">release-978af83</div><div id="tag5185" onclick="CopyToClipboard('tag5185');return false;" class="tag-decoration">release-5.0.4</div><div id="tag25654" onclick="CopyToClipboard('tag25654');return false;" class="tag-decoration">release-v5</div><div id="tag18953" onclick="CopyToClipboard('tag18953');return false;" class="tag-decoration">release-v5.0</div><div id="tag9822" onclick="CopyToClipboard('tag9822');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/978af833492b92a953e44626fc2254899644e902" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29681376820" target="_blank">2026-07-19 09:19:40</a></td></tr>
<tr><td><div id="tag14519" onclick="CopyToClipboard('tag14519');return false;" class="tag-decoration">testing</div><div id="tag6795" onclick="CopyToClipboard('tag6795');return false;" class="tag-decoration">testing-e30e9cd</div><div id="tag1091" onclick="CopyToClipboard('tag1091');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e30e9cda9fd8faac03fa5d97373678faf97e191c" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29681380250" target="_blank">2026-07-19 09:19:48</a></td></tr>
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
