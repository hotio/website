---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8364" onclick="CopyToClipboard('tag8364');return false;" class="tag-decoration">nightly</div><div id="tag14485" onclick="CopyToClipboard('tag14485');return false;" class="tag-decoration">nightly-c00f197</div><div id="tag23898" onclick="CopyToClipboard('tag23898');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/c00f1979ef40ad2264844a2978a57e034ff8d184" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28976295916" target="_blank">2026-07-08 21:15:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30485" onclick="CopyToClipboard('tag30485');return false;" class="tag-decoration">release</div><div id="tag28068" onclick="CopyToClipboard('tag28068');return false;" class="tag-decoration">release-15f3cb1</div><div id="tag29558" onclick="CopyToClipboard('tag29558');return false;" class="tag-decoration">release-0.15.2</div><div id="tag2460" onclick="CopyToClipboard('tag2460');return false;" class="tag-decoration">release-v0</div><div id="tag11239" onclick="CopyToClipboard('tag11239');return false;" class="tag-decoration">release-v0.15</div><div id="tag19869" onclick="CopyToClipboard('tag19869');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/15f3cb1fb3f442564e48ef424d2a818af11dd50a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28976298256" target="_blank">2026-07-08 21:15:59</a></td></tr>
<tr><td><div id="tag31303" onclick="CopyToClipboard('tag31303');return false;" class="tag-decoration">testing</div><div id="tag7841" onclick="CopyToClipboard('tag7841');return false;" class="tag-decoration">testing-df76309</div><div id="tag21151" onclick="CopyToClipboard('tag21151');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag15576" onclick="CopyToClipboard('tag15576');return false;" class="tag-decoration">testing-v0</div><div id="tag25870" onclick="CopyToClipboard('tag25870');return false;" class="tag-decoration">testing-v0.15</div><div id="tag10445" onclick="CopyToClipboard('tag10445');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/df76309c37c9d946408b0322182caa52e24e9152" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28993023004" target="_blank">2026-07-09 03:59:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
