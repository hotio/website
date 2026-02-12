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
<tr><td><div id="tag5499" onclick="CopyToClipboard('tag5499');return false;" class="tag-decoration">nightly</div><div id="tag15282" onclick="CopyToClipboard('tag15282');return false;" class="tag-decoration">nightly-09650a1</div><div id="tag18829" onclick="CopyToClipboard('tag18829');return false;" class="tag-decoration">nightly-aa87657552f9546a5cf2f0500d13cfac2ece2f00</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/09650a191cbe86f4bf3815d15eb10284316a5ae6" target="_blank">Version update: 4917885ea115c515d741281e5b8290fae0a853bd => aa87657552f9546a5cf2f0500d13cfac2ece2f00</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21938410076" target="_blank">2026-02-12 08:04:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25874" onclick="CopyToClipboard('tag25874');return false;" class="tag-decoration">release</div><div id="tag21814" onclick="CopyToClipboard('tag21814');return false;" class="tag-decoration">release-1f69d7e</div><div id="tag17560" onclick="CopyToClipboard('tag17560');return false;" class="tag-decoration">release-4.5.5</div><div id="tag17445" onclick="CopyToClipboard('tag17445');return false;" class="tag-decoration">release-v4</div><div id="tag32581" onclick="CopyToClipboard('tag32581');return false;" class="tag-decoration">release-v4.5</div><div id="tag20284" onclick="CopyToClipboard('tag20284');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1f69d7e1525ce3adb7b09e80910ddcdc1041c120" target="_blank">Version update: 4.5.5 => 4.5.5</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21823457133" target="_blank">2026-02-09 11:35:21</a></td></tr>
<tr><td><div id="tag28672" onclick="CopyToClipboard('tag28672');return false;" class="tag-decoration">testing</div><div id="tag19626" onclick="CopyToClipboard('tag19626');return false;" class="tag-decoration">testing-5d44d33</div><div id="tag805" onclick="CopyToClipboard('tag805');return false;" class="tag-decoration">testing-5.0.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5d44d33cc946496273e73a120f9f17511e828312" target="_blank">Version update: 5.0.0Beta1 => 5.0.0Beta1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21823458878" target="_blank">2026-02-09 11:35:25</a></td></tr>
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
