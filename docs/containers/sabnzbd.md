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
<tr><td><div id="tag6975" onclick="CopyToClipboard('tag6975');return false;" class="tag-decoration">nightly</div><div id="tag5044" onclick="CopyToClipboard('tag5044');return false;" class="tag-decoration">nightly-4dcca9b</div><div id="tag16531" onclick="CopyToClipboard('tag16531');return false;" class="tag-decoration">nightly-9b1b503ce6f2b70df39d2296aed4b7e296f2f18f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4dcca9b6f63188ebdd98712f47dfe04cc3553652" target="_blank">Version update: bc4c4bbcfaaadfc09ef2bddfe3f95b17c0214c1b => 9b1b503ce6f2b70df39d2296aed4b7e296f2f18f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22219324410" target="_blank">2026-02-20 09:49:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20193" onclick="CopyToClipboard('tag20193');return false;" class="tag-decoration">release</div><div id="tag2125" onclick="CopyToClipboard('tag2125');return false;" class="tag-decoration">release-1f69d7e</div><div id="tag2637" onclick="CopyToClipboard('tag2637');return false;" class="tag-decoration">release-4.5.5</div><div id="tag21454" onclick="CopyToClipboard('tag21454');return false;" class="tag-decoration">release-v4</div><div id="tag27669" onclick="CopyToClipboard('tag27669');return false;" class="tag-decoration">release-v4.5</div><div id="tag9343" onclick="CopyToClipboard('tag9343');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1f69d7e1525ce3adb7b09e80910ddcdc1041c120" target="_blank">Version update: 4.5.5 => 4.5.5</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21823457133" target="_blank">2026-02-09 11:35:21</a></td></tr>
<tr><td><div id="tag7295" onclick="CopyToClipboard('tag7295');return false;" class="tag-decoration">testing</div><div id="tag20554" onclick="CopyToClipboard('tag20554');return false;" class="tag-decoration">testing-5d44d33</div><div id="tag12099" onclick="CopyToClipboard('tag12099');return false;" class="tag-decoration">testing-5.0.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5d44d33cc946496273e73a120f9f17511e828312" target="_blank">Version update: 5.0.0Beta1 => 5.0.0Beta1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21823458878" target="_blank">2026-02-09 11:35:25</a></td></tr>
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
